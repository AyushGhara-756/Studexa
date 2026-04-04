package org.th.studexa.s3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.th.studexa.student.StudentService;

import java.io.IOException;

@RestController
@RequestMapping("/file")

@CrossOrigin("http://localhost:3000")
class FileController {

    @Autowired
    private FileService fileService;
    @Autowired
    private StudentService studentService;

    @PostMapping("/upload")
    public String upload(@RequestParam("file") MultipartFile file, @RequestParam("studentId") long studentId) {
        try {
            return fileService.save(file, studentService.getProfile(studentId));
        } catch (IOException e){
            return e.getMessage();
        }
    }
}
