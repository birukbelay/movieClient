import React, {useState} from 'react'

import {NetworkImage} from "Constants/constants";
import {Status} from "../../../../../Store/store.types";


const UpdateForm = ({updateFunction, status,  selectedItem}) => {

    const item=selectedItem

    const uploadStatus = status.uploadStatus

    const [name, setName] = useState(selectedItem.name);
    let [desc, setDesc] = useState(selectedItem.description);
    const [primaryImage, setPrimaryImage] = useState(null);

    const handleSubmit=(event) =>{
        event.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        if (primaryImage!==null){
            formData.append("image", primaryImage);
        formData.append("imageChanged", true);
        }

        formData.append("description", desc);

     updateFunction(formData, selectedItem.id);

    };

    let className = 'alert';
    if (uploadStatus===Status.ERROR) {
        className += ' alert-danger';
    }else if (uploadStatus===Status.SUCCESS){
        className += ' alert-success';
    }else if (uploadStatus===Status.LOADING){
        className += ' alert-info';
    }


    return (

        <div className="container ">

            <form className="form" onSubmit={handleSubmit}>
                <div className="form-body">
                    <div className={className}>
                        {uploadStatus === Status.ERROR && "There is some thing Wrong please try again!"}
                        {/*{uploadError && errorMessage.toString()}*/}
                        {uploadStatus === Status.SUCCESS && "You have Updated The Movie Successfully"}
                        {uploadStatus===Status.LOADING && "loading"}
                    </div>
                    <br/>
                    <h4 className="form-section">
                        <i className="icon-head"/> Add
                    </h4>

                    {/*Name*/}

                    <div className="col-md-9">
                        <SingleInput
                            name={"name"}
                            value={name}
                            setText={setName}
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
                                onChange={(e) => setDesc(e.target.value)}
                                id="projectinput8"
                                rows={5}

                                className="form-control"
                                name="comment"
                                required
                                placeholder="About Movie"

                            />
                        </div>
                    </div>

                    {/*Images*/}
                    <div className="form-group">
                        <label>Update Primary image</label>
                        <br/>
                        <ImageInput path={item.path} image={selectedItem.image} onChange={(e) => setPrimaryImage(e.target.files[0])}/>





                    </div>


                </div>
                <div className="form-actions">
                    <div className={className}>
                        {uploadStatus === Status.ERROR && "There is some thing Wrong please try again!"}
                        {/*{uploadError && errorMessage.toString()}*/}
                        {uploadStatus === Status.SUCCESS && "You have Updated The Movie Successfully"}
                        {uploadStatus===Status.LOADING && "loading"}
                    </div>
                    <br/>
                    <button type="reset" className="btn btn-warning mr-1">
                        <i className="icon-cross2"/> Reset
                    </button>

                    <button disabled={uploadStatus===Status.LOADING} type="submit" className="btn btn-primary mr-3">
                        <i className="icon-check2"/> Save
                    </button>
                </div>
            </form>

        </div>
    )
};

export default UpdateForm

function ImageInput({path, image, onChange}) {
    return <div className="">
        <div className="col-md-4 ">
            <div className="widget-content-left mr-3">
                <div className="widget-content-left">
                    <img width="60" className="rounded-circle" src={NetworkImage(path, image)}
                         alt=""/>
                </div>
            </div>
        </div>

        <div className="col-md-6 ">

            <label id="image10" className="file center-block">
                <input onChange={onChange} type="file" id="image1"/>
                <span className="file-custom"/>
            </label>
        </div>

    </div>;
}
function SingleInput({className, lable, inputType, id, placeholder, name, setText, required, value=false }) {

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
