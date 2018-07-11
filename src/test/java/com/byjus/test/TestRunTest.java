package com.byjus.test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		
		features= "D:\\CucumberWorkspace\\Byjus\\Features",
		glue= {"com.byjus.qa.stepDef"},
		tags= {"@GmailLogin_Feature"},
		monochrome= true,
		plugin={"html:target/cucumber-html-report","json:target/cucumber.json", "pretty:target/cucumber-pretty.txt", "usage:target/cucumber-usage.json","junit:target/cucumber-results.xml"}
				
		)




public class TestRunTest extends AbstractTestNGCucumberTests {



}
