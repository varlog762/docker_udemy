import calendar

print('Welcome to my docker calendar\n')

year = int(input('Enter your year: '))
month = int(input('Enter your month: '))

print(calendar.month(year, month))

print('Goodbye!')