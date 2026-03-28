package org.th.studexa.exceptions;

import graphql.GraphQLError;
import graphql.GraphqlErrorBuilder;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.graphql.execution.DataFetcherExceptionResolver;
import org.springframework.graphql.execution.ErrorType;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.util.List;

@Component
public class GlobalExceptionHandler implements DataFetcherExceptionResolver {


    @Override
    public Mono<List<GraphQLError>> resolveException(Throwable exception, DataFetchingEnvironment environment) {
        if (exception instanceof DuplicateException){
            return Mono.just(List.of(GraphqlErrorBuilder.newError()
                    .message(exception.getMessage())
                    .errorType(ErrorType.NOT_FOUND)
                    .build()
            ));
        }

        if (exception instanceof NotFound){
            return Mono.just(List.of(GraphqlErrorBuilder.newError()
                            .message(exception.getMessage())
                            .errorType(ErrorType.NOT_FOUND)
                    .build()
            ));
        }
        return Mono.empty();
    }
}
