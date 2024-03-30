# Rohit-JHA
Zeksta Solution


Problem 1
Oh!! Mankind is in trouble again. This time, it's a deadly disease spreading at a rate never seen before. The need of the hour is to set up efficient virus detectors. You are the lead at Central Hospital and you need to find a fast and reliable way to detect the footprints of the virus DNA in that of the patient.

The DNA of the patient as well as of the virus consists of lowercase letters. Since the collected data is raw, there may be some errors. You will need to find all substrings in the patient DNA that either exactly match the virus DNA or have at most one mismatch, i.e., a difference in at most one location.

For example, "aa" and "aa" are matching, "ab" and "aa" are matching, while "abb" and "bab" are not.

Function Description

Complete the virusIndices function in the editor below. It should print a list of space-separated integers that represent the starting indices of matching substrings in increasing order, or No match!.

virusIndices has the following parameter(s):

p: a string that represents patient DNA

v: a string that represents virus DNA

Input Format

The first line contains an integer , the number of test cases.

. Each of the next lines contains two space-separated strings (the patient DNA) and (the virus DNA).

Output Format

For each test case, output a single line containing a space-delimited list of starting indices (-indexed) of substrings of which are matching with according to the condition mentioned above. The indices have to be in increasing order. If there is no matching substring, output No Match!.

Sample Input 0

3

abbab ba

hello world

banana nan

Sample Output 0

1 2

No Match!

0 2

Explanation 0

For the first case, the substrings of starting at indices and are "bb" and "ba" and they are matching with the string which is "ba".

For the second case, there are no matching substrings so the output is No Match!.

For the third case, the substrings of starting at indices and are "ban" and "nan" and they are matching with the string which is "nan".

Sample Input 1

3

cgatcg gc

atcgatcga cgg

aardvark ab

Sample Output 1

1 3

2 6

0 1 5

Explanation 1

For the first case, the substrings of starting at indices and are "ga" and "gc" and they are matching with the string which is "gc".

For the second case, the substrings of starting at indices and are "cga" and "cga" and they are matching with the string which is "cgg".

For the third case, the substrings of starting at indices , and are "aa", "ar" and "ar" and they are matching with the string which is "ab".

Problem 2
Scope:-

The scope of this task is to get a full functioning project. You can use any tech stack of your choice.

Setup a project

Login Form:-

Following fields should be there:

Phone Number/Email
Password
Note:-

Proper validation on the fields is expected.
Depending on the input data in field, the email or phone number validation should be there i.e. User should be able to login with email or phone number using the same input field.
Required Functionality:

LogIn Button
Register Now Link
Forget Password Link
Registration Form:-

Following fields should be there:

Phone Number
Email
Password
Confirm Password
Note:- Proper validation on the fields is expected.

Required Functionality:

Register Now Button
LogIn Link
Forget Password Form:-

Following fields should be there:

Confirm Email id
Note:- Proper validation on the fields is expected.

Required Functionality:

Send email functionality should be integrated to send OTP for verification.
Send OTP Button
OTP Verification:-

Following fields should be there:

Verify OTP
Note:- Proper validation on the fields is expected.

Required Functionality:

Confirm OTP Button
Confirm Password:-

Following fields should be there:

New Password
Confirm Password
Note:- Proper validation on the fields is expected.

Required Functionality:

Reset Password Button
Dashboard:-

Proper functioning dashboard with:

header
drawer sidebar
routing
logout functionality
view profile, etc
Table Component (Optional):-

A table with a list of expenses done by user with pagination, filter and search

Table should contain following data:

Expanse Name
Expense Type (i.e. Food, Travel, Cloths, etc)
Amount There should be an edit and delete button with full working functionality for every expense. There should be a create button with full working functionality for creating new expenses.
Authentication:-

Authentication should be done on all the routes, i.e. user should not be able to access the dashboard and its components without logging in.

Note:-

Expecting reusable components.
You have freedom of design.
You have freedom to implement any other functionality after completing the above given all the requirements.
