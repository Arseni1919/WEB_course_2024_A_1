# from flask import Flask
# from flask import redirect
from flask import Flask, redirect, url_for
from flask import render_template
from flask import request, session


app = Flask(__name__)
app.secret_key = '123'



@app.route('/')
def main_page():
    if 'username' in session:
        username = session.get('username')
        email = session.get('email')
        return render_template('lecture7_flask.html',
                               name=username,
                               second_name=email,
                               hobbies=['Art', 'Sports', 'Computers', 'Programming', 'AI', 'Youtube'],
                               user_details={'id': 123, 'color': 'orange', 'height': 100}
                               )
    return render_template('lecture7_flask.html',
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


@app.route('/users')
def users_func():
    return render_template('users.html')


@app.route('/logout', methods=['GET'])
def logout_func():
    session['logged_in'] = False
    session['username'] = ''
    session['email'] = ''
    return redirect(url_for('login_func'))

@app.route('/login', methods=['GET', 'POST'])
def login_func():
    print(f'The method is: {request.method}')
    if request.method == 'POST':
        if 'username' in request.form:
            username = request.form['username']
            email = request.form['email']
            password = request.form['password']
            # check the password with DB
            session['username'] = username
            session['email'] = email
            session['logged_in'] = True
            return render_template('login.html',
                                   post_username=username, post_email=email)
        return render_template('login.html')
    if request.method == 'GET':
        if 'username' in request.args:
            username = request.args['username']
            email = request.args['email']
            password = request.args['password']
            # check the password with DB
            session['username'] = username
            session['email'] = email
            return render_template('login.html',
                               username=username, email=email)
        return render_template('login.html')

# user_dict = {
#     'arsenip': '1919',
#     'yossi': '1234'
# }
#
#
# @app.route('/log_in', methods=['GET', 'POST'])
# def login_func():
#     if request.method == 'POST':
#         username = request.form['username']
#         password = request.form['password']
#         if username in user_dict:
#             pas_in_dict = user_dict[username]
#             if pas_in_dict == password:
#                 session['username'] = username
#                 session['logedin'] = True
#                 return render_template('log_in.html',
#                                        message='Success',
#                                        username=username)
#             else:
#                 return render_template('log_in.html',
#                                        message='Wrong password!')
#         else:
#             return render_template('log_in.html',
#                                    message='Please sign in!')
#     return render_template('log_in.html')
#
#
# @app.route('/log_out')
# def logout_func():
#     session['logedin'] = False
#     session.clear()
#     return redirect(url_for('login_func'))
#
#
# @app.route('/session')
# def session_func():
#     # print(session['CHECK'])
#     return jsonify(dict(session))



