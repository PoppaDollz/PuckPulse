import requests

class Schedule:
    def __init__(self):
        self.basePath = f"https://api-web.nhle.com/v1/schedule"
    
    def getSchedule(self):
        schedule = requests.get(f"{self.basePath}/now").json()
        return schedule
