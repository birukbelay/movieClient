import React, {useRef, useState} from 'react'
import {Status} from "../../../../../Store/store.types";

const CreateForm = ({ Upload, status}) => {

    const uploadStatus =status.uploadStatus


    //State
    const [name, setTitle] = useState("hollywood");
    const [desc, setName] = useState("this is the best movie ever");
    const [primaryImage, setPrimaryImage] = useState(null);
    const thumbRef = useRef();

    const handleSubmit=(event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", primaryImage);

        formData.append("description", desc);
        formData.append("thumbnail", thumbRef.current.files[0].name);
        Upload(formData)

        if(uploadStatus===Status.SUCCESS){

            const fileInput = document.getElementById('Reset');
            fileInput.click();
            event.target.reset()
        }
    };

        let className = 'alert';
        if (uploadStatus===Status.ERROR) {
            className += ' alert-danger';
        }else if (uploadStatus===Status.SUCCESS){
            className += ' alert-success';
        }else if(uploadStatus===Status.LOADING){
            className += ' alert-info';
        }

        let submitBtn = 'btn mr-3';
        if (uploadStatus===Status.ERROR) {
            submitBtn += ' btn-danger';
        }else if (uploadStatus===Status.SUCCESS){
            submitBtn += ' btn-success';
        }else if (uploadStatus===Status.LOADING){
            submitBtn += ' btn-warning';
        }else {
            submitBtn += ' btn-info'
        }



    return (
        <div className="container ">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-body">
                    <div className={className}>
                        {uploadStatus===Status.ERROR && "There is some thing Wrong please try again!"}
                        {/*{uploadError && errorMessage.toString()}*/}
                        {uploadStatus===Status.SUCCESS && "You have Created The Movie Successfully"}
                        {uploadStatus===Status.LOADING && "loading" }
                    </div>
                    <h4 className="form-section">
                        <i className="icon-head"/> Add Group
                    </h4>

                        <div className="col-md-9">
                            <SingleInput
                                value={name}
                                name={"name"}
                                setText={setTitle}
                                lable={"Movie Name"}
                                inputType={"text"}
                                id={"projectinput1"}
                                placeholder={"Movie Name"}
                                required={true}
                            />
                        </div>


                    {/*Description*/}
                    <h4 className="form-section ">
                        <i className="icon-clipboard4"/> Short Description
                    </h4>
                    <div className="row">
                    <div className="form-group col-md-9">
                        {/*<label htmlFor="projectinput8">Movies Description</label>*/}
                        <textarea
                            value={desc}
                            onChange={(e) => setName(e.target.value)}
                            id="projectinput8"
                            rows={5}

                            className="form-control"
                            name="comment"
                            required
                            placeholder="About Movie"
                            defaultValue={""}
                        />
                    </div>
                    </div>





                    {/*Image*/}
                    <div className="form-group">
                        <label>Select  Image</label> <br/>
                        <label id="projectinput7" className="file center-block">
                            <input ref={thumbRef} onChange={(e) => setPrimaryImage(e.target.files[0])} required type="file" id="file"/>
                            <span className="file-custom"/>
                        </label>
                        <br/>

                    </div>



                </div>
                <div className="form-actions">
                    <div className={className}>
                        {uploadStatus===Status.ERROR && "There is some thing Wrong please try again!"}
                        {/*{uploadError && errorMessage.toString()}*/}
                        {uploadStatus===Status.SUCCESS && "You have Created The Movie Successfully"}
                        {uploadStatus===Status.LOADING && "loading" }
                    </div><br/>
                    <button id={"Reset"} type="reset" className="btn btn-warning mr-1">
                        <i className="icon-cross2"/> Reset
                    </button>
                    <button disabled={uploadStatus===Status.LOADING} type="submit" className={submitBtn}>
                        <i className="icon-check2"/> Save
                    </button>
                </div>
            </form>

        </div>
    )
};


export default CreateForm

function SingleInput({className, lable, inputType, id, placeholder, name, setText, required=false, value }) {

    return <div className={`${className}`}>
        <div className="form-group">
            <label htmlFor="projectinput3">{`${lable}`}</label>

            <input
                value={value}
                type={`${inputType}`}
                placeholder={`${placeholder}`}
                onChange={(e) => { setText(e.target.value )}}
                required={required}
                id={`${id}`}
                name={`${name}`}
                className="form-control"
            />
        </div>
    </div>;
}
