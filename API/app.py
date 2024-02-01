from flask import Flask, render_template

from Components.Schedule import Schedule

app = Flask(__name__)

@app.route("/schedule", methods=["GET"])
def index():
    schedule = Schedule().getSchedule()
    return schedule

app.run(debug=True)