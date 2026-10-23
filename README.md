## Calendar Framework

Build a web-based shift roster system that promotes colloboration between managers and staff to publish dynamic work rosters.

# Technology

* docker compose environment
* React + FullCalendar  
* storage?
* backend?
* Database?
* two way SMS/email gateway?

# Rules

1. The calendar interface with similar style to google calendar
2. Categories of free/busy patterns can be overlaid using different colors
3. Templates of free/busy patterns can be applied over a date range
4. templates can span over an arbartary number of days
5. shifts only have start and finish times
6. Anyone who registeres is automatically an admin
7. Staff can have more than one role
8. Published rosters go out via e-mail/SMS
9. A roster change code must be included in return SMS/email
10. A one-time preference page URL can be opened by recipent for roster change request
11. Staff can be preferenced for the roster ahead of others'
12. A role can have max rostered hours
13. An admin can overide min/max hours 

# Glossary

1. Entry - Single start finish time and day that is in one category
2. Category - An entry classification with restrictions
3. Template - A span of dateless days with categories of entries which can be applied to a roster 
4. Period - Days a Template and Roster will span
5. Shift - is defined in a template category to restrict start and finish time and day
6. Roster - A calendar spanning a date range where staff are assigned shifts.
7. Staff - A user that has an email, phone and has any one of a number or roles
8. Role - A role and a category are synoymous but links a staff member to the rules of the roster
9. Role Hours - Max total hours per roster
10. Role Min Hours - Min totals hours per roster
11. Staffing - Integer of the number or staff to man a shift
12. Staff Rating - Preference level for rostering Staff
13. SoftMin - the minimum hours a role can do per roster
14. SoftMax - the maximum hours a role can do per roster
15. HardMax - no more than these hours per roster 
16. Rostered Shift - A shift that is a single entry on the roster allocated to a staff member 
17. Preference - Is a shift or rostered shift that a staff member can elect to take 
18. Exclusion - Is a shift or rostered shift that a staff member can elect to not take
19. Manager - A special type of staff that can manipulate all of the above
20. Location - Separation delimeter that encumpases all of the above
21. Organisation - Separation delimiter that encoumpases all of the above
22. SuperAdmin - A speical type of staff member that can manipulate all the above


# Interface

1. Login/Register - use login with Google, Facebook, password etc.
2. Setup Wizard - Ask minimal questions to initialise first roster
3. Organisation Details Page - Contact details and Location setup
4. Role Setup Page - Name roles and allocate a color for each
5. Shift Setup Page - For each role define the shifts and staffing for each period
6. Staff Setup Page - Name, email & phone number of staff including role(s)
7. Staff Preference Page - Shifts & rostered shifts that are preferred or excluded
8. Unpublished Roster Page - Draft future rosters, yet to be made official
9. Published Roster Page - Past, current or future rosters known by staff
10. Alteration Request Page - Staff request cfor hange to published roster