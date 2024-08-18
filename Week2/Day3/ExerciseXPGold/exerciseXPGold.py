from datetime import date


def date_hol():
    today = date.today()
    print(today)
    next_hol = date(2024,12,31)
    days_until_holiday = next_hol - today
    return days_until_holiday

print(f"the next holiday is in {date_hol()} ")


def calculate_age_on_planets(seconds):
    orbital_periods = {
        "Earth": 1.0,
        "Mercury": 0.2408467,
        "Venus": 0.61519726,
        "Mars": 1.8808158,
        "Jupiter": 11.862615,
        "Saturn": 29.447498,
        "Uranus": 84.016846,
        "Neptune": 164.79132
    }

    earth_year_in_seconds = 31557600

    ages = {}
    for planet, period in orbital_periods.items():
        age = seconds / (earth_year_in_seconds * period)
        ages[planet] = round(age, 2)
    
    return ages

age_in_seconds = 567844444600
ages_on_planets = calculate_age_on_planets(age_in_seconds)

for planet, age in ages_on_planets.items():
    print(f"Age on {planet}: {age} years")