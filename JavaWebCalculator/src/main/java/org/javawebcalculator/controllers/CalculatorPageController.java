package org.javawebcalculator.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author Kyle
 */
@Controller
public class CalculatorPageController {

    @RequestMapping(value = "calculator.htm", method = RequestMethod.GET)
    public String sendCalculator(Model model) {
        return "calculator";
    }
}