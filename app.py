from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/images/<filename>')
def images(filename):
    return send_from_directory('Resources', filename)

@app.route('/get_images')
def get_images(): 
    image_files = os.listdir('Resources')
    images = [f'/images/{img}' for img in image_files if img.endswith(('.png', '.jpg', '.jpeg', '.gif'))]
    return {'images': images}

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")