package main.java;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Administrator on 2016/12/9.
 */
@RestController
public class Controller {
    @RequestMapping("/")
    String home() {
        return "Hello World!";
    }
}
