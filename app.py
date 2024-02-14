# from flask import Flask
# from flask import redirect
from flask import Flask, redirect, url_for
from flask import render_template

app = Flask(__name__)


@app.route('/')
def main_page():
    return render_template('lecture7_flask.html',
                           name='Yossi',
                           second_name='Baruh',
                           hobbies=['Art', 'Sports', 'Computers', 'Programming', 'AI', 'Youtube'],
                           user_details={'id': 123, 'color': 'orange', 'height': 100}
                           )


@app.route('/profile', methods=['GET', 'POST', 'PUT'])
def profile_page():
    # do something with DB for example
    # return redirect('/')
    return redirect(url_for('hello_world'))


@app.route('/about', methods=['GET'])
@app.route('/about/me')
def about_page():
    return render_template('about.html')


