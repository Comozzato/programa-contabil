package controller;

@RestController
@RequestMapping("/api")
public class MyController {

    @GetMapping("/data")
    public ResponseEntity<String> getData() {
        return ResponseEntity.ok("Data from Spring Boot backend");
    }
}
