from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/overzicht")
def overzicht():
    return render_template("overzicht.html")

@app.route("/richtlijnen")
def richtlijnen():
    return render_template("richtlijnen.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

if __name__ == "__main__":
    app.run()
                            