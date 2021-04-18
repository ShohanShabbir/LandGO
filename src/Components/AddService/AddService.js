import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './AddService.css';
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            description: data.message,
            imageURL: imageURL
        }
        const url = `http://localhost:5055/addService`;
        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))


};

const handleImageUpload = event => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', '054190c7de23e866194a70b178eb0fa6');
    imageData.append('image', event.target.files[0]);
    axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
            setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
            console.log(error);
        });
}
 return (
    <section>
        <div className="row w-100">
            <div className="col-md-5 col-sm-6 col-12 w-100">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 col-sm-12 col-12 admin">
                <h1>Add A Service</h1>

                <form onSubmit={handleSubmit(onSubmit)} action="#" method="post" id="contact_form">
                    <div class="name mr-3">
                        <label for="name"></label>
                        <input type="text" placeholder="Service name is" name="name" id="name_input" required ref={register} />
                    </div>
                    <div class="name">
                        <label for="price"></label>
                        <input type="text" placeholder="Price" name="price" id="name_input" required ref={register} />
                    </div>
                    <div class="message">
                        <label for="message"></label>
                        <textarea name="message" placeholder="Description" id="message_input" cols="30" rows="5" required ref={register}></textarea>
                    </div>

                    <div class="telephone mr-auto">
                        <label for="name ">Upload An Image</label>
                        <input onChange={handleImageUpload} class="form-control" type="file" placeholder="My number is" name="telephone" id="telephone_input" />
                    </div>

                    <div class="submit mt-5">
                        <input type="submit" value="Add" id="form_button" />
                    </div>
                </form>
            </div>

        </div>
    </section>
);
};

export default AddService;