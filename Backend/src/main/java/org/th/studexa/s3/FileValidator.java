package org.th.studexa.s3;

import org.springframework.web.multipart.MultipartFile;
import org.th.studexa.exceptions.FIleSizeException;

import java.util.List;

public class FileValidator {

    private final List<String> allowed_types = List.of(
            "multipart/form-data",
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "image/jpeg",
            "image/png"
    );

    private final long MAX_SIZE = 20 *1024*1024;

    public void validate(MultipartFile file){
        if (file.isEmpty()){
            throw new IllegalArgumentException("File is empty");
        }
        if (file.getSize() > MAX_SIZE){
            throw new FIleSizeException(file.getName());
        }
        if (!allowed_types.contains(file.getContentType())) {
            throw new IllegalArgumentException("File type not supported");
        }
    }
}
