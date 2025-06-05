from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/overzicht")
def overzicht():
    return render_template("overzicht.html")

@app.route("/gedragscode")
def gedragscode():
    return render_template("gedragscode.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/oplossingen")
def oplossingen():
    return render_template("oplossingen.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
