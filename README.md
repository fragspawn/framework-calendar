## Calendar Framework

Build a drag and drop system that implements free/busy blocks over an arbatary spans dated and non dated sheets

# Technology

* docker compose environment
* React + FullCalendar  
* storage?
* backend?
* Database?

# Features

1. The calendar interface with similar style to google calendar
2. Categories of free/busy patterns can be overlaid using unique colors
3. Templates of free/busy patterns can be applied over a date range
4. pattern templates can span over an arbartary number of days
5. patterns have start and finish times
6. a single entry on calendar or in template can have a shift  

# Glossary

1. Entry - Single start finish time and day that is in one category
2. Category - An entry classification with restrictions
3. Template - A span of dateless days with categories of entries which can be applied to a roster 
4. Shift - is defined in a template category to restrict start and finish time and day
5. Roster - A calendar spanning a date range where staff are assigned shifts.
6. Staff - A user that has an email, phone and has any one of a number or roles
7. Role - A role and a category are synoymous but links a staff member to the rules of the roster
8. SoftMin - the minimum hours a role can do per roster
9. SoftMax - the maximum hours a role can do per roster
10. HardMax - no more than these hours per roster 
11. Rostered Shift - A shift that is a single entry on the roster allocated to a staff member 
12. Preference - Is a shift or rostered shift that a staff member can elect to take 
13. Exclusion - Is a shift or rostered shift that a staff member can elect to not take
14. Admin - A special type of staff that can manipulate all of the above
15. Location - Separation delimeter that encumpases all of the above
16. Organisation - Separation delimiter that encoumpases all of the above
17. SuperAdmin - A speical type of staff member that can manipulate all the above
