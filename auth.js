function authenticate(helper, paramsValues, credentials) {
    var driver = helper.getWebDriver();

    // Open application (redirects to Auth0)
    driver.get("https://valuelabs-admin.adhoc.stabilthus.io/");

    // Wait for Auth0 username field
    helper.waitForElement(driver, By.name("username"), 30);

    // Username
    var user = driver.findElement(By.name("username"));
    user.clear();
    user.sendKeys(credentials.getParam("Username"));

    // Password
    var pass = driver.findElement(By.name("password"));
    pass.clear();
    pass.sendKeys(credentials.getParam("Password"));

    // Submit
    pass.submit();

    // Wait until redirected back to app
    helper.waitForPageToLoad(driver, 30);

    // Final check: dashboard loaded
    helper.waitForElement(driver, By.cssSelector("body"), 30);
}
