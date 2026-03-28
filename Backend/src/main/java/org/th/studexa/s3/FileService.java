package org.th.studexa.s3;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.th.studexa.student.StudentProfile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class S3Service {

    @Value("${files.upload-directory}")
    private String uploadDir;
    FileValidator validator = new FileValidator();

    public String save(MultipartFile file, StudentProfile profile) throws IOException {
        if (!file.isEmpty()) {
            validator.validate(file);
            String fileName = file.getOriginalFilename();
            Path path = Paths.get(uploadDir + "\"" + profile.getName());

            if (!Files.exists(path)) {
                Files.createDirectories(path);
            }

            Path filePath = path.resolve(fileName);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
            return fileName;
        }

        throw new IllegalArgumentException("File is empty");
    }
}
