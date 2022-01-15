 /*
 1. Define a query that counts the total number of .com Companies (NAME ends with .com) located in Bangkok or Brussels
*/

SELECT COUNT * 
FROM  COMPANIES
WHERE City('Brussels','Bangkok') AND NAME LIKE '%.com';

 /*
 2. Define a query that selects the top 5 cities, sorted by the highest number of occurrences on top.
*/

SELECT TOP 5 CITY
FROM COMPANIES;

 /*
 1.Select a unique list of K_COMPANY for all Companies with at least one contact linked without using joins.
*/

SELECT DISTINCT  COMPANIES.NAME, CONTACTS.NAME, FIRSTNAME 
FROM COMPANIES, CONTACTS
WHERE K_CONTACT = 1;

 /*
2.Select all companies that are linked or not to contacts. All columns from tables COMPANIES and CONTACTS (joined by CONT_COMP) must be selected in only one statement. The result should be sorted by Company name (A-z), second by Contact name (Z-a).
*/

SELECT COMPANIES.NAME, CONTACTS.NAME
FROM CONT_COMP
JOIN COMPANIES ON CONT_COMP.K_COMPANY = COMPANIES.K_COMPANY
JOIN CONTACTS  ON  CONT_COMP.K_CONTACT = CONTACTS.K_CONTACT 
ORDER BY COMPANIES.NAME ASC, CONTACTS.NAME DESC;

 /*
Count the number of contacts without a link to a Company.
*/

SELECT COUNT *
FROM CONTACTS
INNER JOIN COUNT_COMP ON COUNT_COMP.K_COMPANY = CONTACTS.K_CONTACT;