import React, {useRef, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Status} from "../../../../Store/store.types";
import {MovieTypes} from "./store/item_types";
import {CheckboxGroup, CategoryRadioGroup, SingleInput} from "App/Components/inputComponents";

//functions & states
import {getStatus} from "./store/item_selector";

import {getCurrentPageItems} from "../../../../Store/Category/store/category_selectors";
import * as GenreSelectors from "../../../../Store/Genres/store/genres.selectors";

import {CreateItem} from "./store/items_repo";

import _genres from 'Data/mock/genres.json'
import _category from 'Data/mock/categories.json'
import {NetworkImage} from "../../../../Constants/constants";

const CreateItemForm = ({uploadImage}) => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const status = getStatus(state);

    const categories = _category
    const genres = _genres

    const uploadStatus =status.uploadStatus

    //State
    const [title, setTitle] = useState("pirates of the caribbean");
    const [year, setYear] = useState(1999);
    const [type, setType] = useState(MovieTypes.MOVIE);
    const [primaryImage, setPrimaryImage] = useState(null);
    const [firstImage, setFirstImage] = useState(null);
    const [secondImage, setSecondImage] = useState(null);
    const [thirdImage, setThirdImage] = useState(null);
    const [desc, setDesc] = useState("this is the best movie ever");
    const [genre, setGenre]=useState({});
    const [category, setCategory]=useState("");
    const thumbRef = useRef();

    const handleCheckboxChange=(event)=> {
        var isChecked = event.target.checked;
        var item = event.target.value;
        setGenre({...genre, [item]: isChecked})
    }

    const handleRadioChange=(event)=> {
        const item = event.target.value;
        setCategory(item)
    }

    const handleSubmit=(event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("img", primaryImage);
        formData.append("year", year);
        formData.append("type", type);
        formData.append("description", desc);
        formData.append("category", category);
        // formData.append("thumbnail", thumbRef.current.files[0].name);

        Object.entries(genre).map(([key, value]) => {
            if(value===true){
                formData.append("genres", key)
                console.log("key", key)
            }
            // Pretty straightforward - use key for the key and value for the value.
            // Just to clarify: unlike object destructuring, the parameter names don't matter here.
        });

        if (firstImage!=null){
            formData.append("images", firstImage);
        }
        if (secondImage!=null){
            formData.append("images", secondImage);
        }
        if (thirdImage!=null){
            formData.append("images", thirdImage);
        }
        dispatch(CreateItem(formData))
        // uploadImage(formData)


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
                        <i className="icon-head"/> Add Movie
                    </h4>

                    {/*Name*/}

                        <div className="col-md-9">
                            <SingleInput
                                value={title}
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

                    <div className="row">


                        {/* -------------- Genres -------------*/}
                        <div className="col-md-6">
                            <CheckboxGroup checkedValues={genre} genres={genres} onChange={handleCheckboxChange}/>
                        </div>

                        {/*---------------- Category ---------------*/}
                        <div className="col-md-6">

                    <MovieTypeSelect setFunction={setType}/>
                                <CategoryRadioGroup categoryState={category} categories={categories} onChange={handleRadioChange}/>

                            </div>
                    </div>

                    {/*Year*/}
                    <div className="row">
                        <div className="form-group col-md-6 ">
                            <label>year</label>
                            <div className="input-group">
                                <input
                                    value={year}
                                    onChange={(e) => { setYear(e.target.value )}}
                                    type="number"
                                    className="form-control"
                                    placeholder="year"
                                    required
                                    aria-label="Amount (to the nearest dollar)" name="price"/>
                                {/*<span className="input-group-addon">.00</span>*/}
                            </div>
                        </div>
                    </div>

                    {/*Image*/}
                    <div className="form-group">
                        <label>Select primary  Image</label> <br/>

                        <label id="projectinput7" className="file center-block">
                            <input ref={thumbRef} onChange={(e) => setPrimaryImage(e.target.files[0])} required type="file" id="file"/>
                            <span className="file-custom"/>
                            <div className="col-md-4 ">
                                <div className="widget-content-left mr-3">
                                    <div className="widget-content-left">
                                        <img width="60" className="rounded-circle" src={primaryImage?.url||primaryImage?.preview}
                                             alt=""/>
                                    </div>
                                </div>
                            </div>
                        </label>
                        <br/>

                        <label>Select Additional Images</label> <br/>
                        <label id="image1" className="file center-block">
                            <input onChange={(e) => setFirstImage(e.target.files[0])}  type="file" id="image1"/>
                            <span className="file-custom"/>
                        </label>
                        <label id="image2" className="file center-block">
                            <input onChange={(e) => setSecondImage(e.target.files[0])}  type="file" id="image2"/>
                            <span className="file-custom"/>
                        </label>
                        <label id="image3" className="file center-block">
                            <input onChange={(e) => setThirdImage(e.target.files[0])}  type="file" id="image3"/>
                            <span className="file-custom"/>
                        </label>
                    </div>



                </div>
                <div className="form-actions">

                    <div className={className}>
                        {uploadStatus===Status.ERROR && "There is some thing Wrong please try again!"}<br/>
                    {/*    {uploadStatus===Status.ERROR && status.errors.Data!==undefined && status.errors.Data}*/}
                    {/*    /!*{uploadError && errorMessage.toString()}*!/*/}
                        {uploadStatus===Status.SUCCESS && "You have Created The Movie Successfully"}
                        {uploadStatus===Status.LOADING && "loading" }
                    </div>

                    <br/>
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


export default CreateItemForm

function MovieTypeSelect({  setFunction}) {
    return<div className="form-group">
        <label htmlFor="projectinput5">Type</label>

        <select
            onChange={(e) => { setFunction(e.target.value )}}
            id="projectinput5"
                defaultValue={""}
            required
            name="interested"
            className="form-control"
        >
            <option value="none" selected disabled>
                Types
            </option>
            <option  value={MovieTypes.MOVIE}>Movie</option>
            <option  value={MovieTypes.CONTINUAL}>Continual</option>
            <option  value={MovieTypes.SERIES}>SERIES</option>

        </select>

    </div>
        ;
}

// function DropdownSelect({ items, setFunction}) {
//     return<div className="form-group">
//             <label htmlFor="projectinput5">Categorie</label>
//
//             <select
//
//                 onChange={(e) => { setFunction(e.target.value )}}
//                 id="projectinput5"
//                 required={true}
//                 name="interested"
//                 className="form-control"
//             >
//                 <option value="none" selected disabled>
//                     Category
//                 </option>
//                 {
//                     items.map(category=>
//                         <option key={category.id} value={category.id}>{category.name}</option>
//
//                     )
//                 }
//
//             </select>
//
//         </div>
//     ;
// }

