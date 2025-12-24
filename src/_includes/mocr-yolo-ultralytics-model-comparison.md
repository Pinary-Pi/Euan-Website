# MOCR YOLO Ultra&shy;lytics Model Comparison

<div class="divider"></div>

## a set of Ultralytics YOLO models trained to recognize sheet music symbols

I began this project as the final assignment for an introductory Python programming course. Although I already had a strong background in Python prior to taking the class, I wanted to challenge myself by pursuing a project that went well beyond the course requirements. I decided to train a YOLO (You Only Look Once) object detection model to recognize musical symbols in sheet music, a task that combines computer vision, dataset design, and domain-specific structure. This type of project falls under the realm of MOCR or musical optical character recognition. In the future, I hope to build an application that can take an inputted .PDF file and export an .MXL to help composers and arrangers in their workflow.

Throughout this project, I used the <a href="https://www.ultralytics.com/" target="_blank" rel="noopener noreferrer">Ultralytics</a> YOLO framework. At first, I collected images of sheet music and individual musical symbols from a variety of online sources, and then, I manually annotated them using <a href="https://github.com/HumanSignal/labelImg" target="_blank" rel="noopener noreferrer">LabelImg</a>. In total, I trained the model to detect ten distinct musical symbols: whole notes, half notes, quarter notes, eighth notes, sixteenth notes, treble clefs, alto (C) clefs, bass clefs, sharps, and flats. Because musical notation contains many visually similar symbols, careful labeling and dataset construction were essential to the project’s outcome.

To improve the model’s ability to distinguish between closely related symbols, I also included images of thirty-second notes and blank staves with zero labels. This helped teach the model not only what is a target symbol, but also what is not, reducing false positives and improving robustness. After training, I integrated the model with a live webcam feed using the <a href="https://opencv.org/" target="_blank" rel="noopener noreferrer">OpenCV</a> library, allowing for real-time detection and visualization of musical symbols.

This project allowed me to apply Python in a practical, end-to-end machine learning workflow, from data collection and annotation to model training, evaluation, and deployment. The full dataset, training configuration, and source code are available in the linked <a href="https://github.com/Pinary-Pi/mocr-yolo-ultralytics-model-comparison" target="_blank" ref="noopener noreferrer">GitHub repository</a>.

![an image of a labeled page of sheet music that the model ran on](/images/mocr-yolo-test5.jpg)