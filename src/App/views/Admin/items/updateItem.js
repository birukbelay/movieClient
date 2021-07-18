import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom'
//Constants
import * as gConsts from "Constants/constants";
import {NetworkImage} from "Constants/constants";
import * as types from "./store/item_types";
import {UPDATE_ERROR} from "./store/item_types";
import {Status} from "Store/store.types";
//actions
import {CheckboxGroup, CategoryRadioGroup, SingleInput} from "App/Components/inputComponents";
//Functions
import {receivedSingle} from "./store/item_actions";
import {getStatus, getSelectedItem} from "./store/item_selector";
import {updateItem} from "./store/items_repo";

// import {getCurrentPageItems} from "../../../../Store/Category/store/category_selectors";
// import * as Selectors from "../../../../Store/Genres/store/genres.selectors";

import _category from "../../../../Data/mock/categories.json";
import _genres from "../../../../Data/mock/genres.json";


const UpdateItemForm = () => {


    const dispatch = useDispatch();
    const state = useSelector((state) => state);

   const status=getStatus(state)

    const categories = _category
    const genres = _genres

    const selectedItem= getSelectedItem(state)

    const localItem =selectedItem.localItem
    const item=selectedItem.item

    const loadStatus= selectedItem.loadStatus
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [year, setYear] = useState(0);
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [genre, setGenre]=useState({});
    const [category, setCategory]=useState("");



    const [primaryImage, setPrimaryImage] = useState(null);
    const [images, setImages]=useState([]);
    const [ChangedImages, setChangedImages]=useState({});
    // const [imageChanged, setImageFiles]=useState(false);

    const [secondImage, setSecondImage] = useState(null);
    const [thirdImage, setThirdImage] = useState(null);

    useEffect(() => {
        dispatch({ type: types.ITEM_REQUEST_SINGLE, });
        fetch(gConsts.API_ROOT+`movies/${localItem.id}`, {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(data=>{

            const item= data.movie
            item.id=item._id
            dispatch(receivedSingle(item))

            SetFields(item)
        }).catch(err => {
            console.log('caught it!', err);
            history.push(`list`)
            dispatch({ type: UPDATE_ERROR});
        })

    }, []);


    function SetFields(data) {
        if (loadStatus===Status.ERROR){
                history.push(`list`)
                console.log(item,"====load======")

            }
        // dispatch(receivedItem(Data))
        setTitle(data.title)
        setDesc(data.description)
        setYear(data.year)
        setType(data.type)
        setCategory(data.category)
        // Data.genres.map()
        let genre = {};
        if(data.genres!==undefined){
        for (let i = 0; i < data.genres.length; ++i)
            if (data.genres[i] !== undefined) genre[data.genres[i]] = true;
        }
        setGenre(genre)
        if(data.images!==undefined){
            setImages(data.images)
        }

    }

    // setTitle(item.title)
    const updateStatus = status.uploadStatus

    const handleCheckboxChange=(event)=> {
        const isChecked = event.target.checked;
        const item = event.target.value;
        setGenre({...genre, [item]: isChecked} )
    }
    const handleRadioChange=(event)=> {
        const item = event.target.value;
        setCategory(item)
    }

    const handleImageUpdate=(event, image)=> {
        setChangedImages({...ChangedImages, [image]:event.target.files[0]})
    }
    const handleSubmit=(event) =>{
        event.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        if (primaryImage!==null){
            formData.append("primaryImage", primaryImage);
        }
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
        })

        Object.entries(ChangedImages).map(([key, value]) => {
            if(value!==null&& value!==undefined){
                formData.append("changedImagesName", key)
                formData.append("changedImages", value)
           }
            // Pretty straightforward - use key for the key and value for the value.
            // Just to clarify: unlike object destructuring, the parameter names don't matter here.
        })
        if(secondImage!==null){
            formData.append("addedImages", secondImage);
        }
        if(thirdImage!==null){
            formData.append("addedImages", thirdImage);
        }
        dispatch(updateItem(formData, item.id));

    };

    let className = 'alert';
    if (updateStatus===Status.ERROR) {
        className += ' alert-danger';
    }else if (updateStatus===Status.SUCCESS){
        className += ' alert-success';
    }else if (updateStatus===Status.LOADING){
        className += ' alert-info';
    }


    return (

        <div className="container ">

            <form className="form" onSubmit={handleSubmit}>
                <div className="form-body">
                    <div className={className}>
                        {updateStatus === Status.ERROR && "There is some thing Wrong please try again!"}
                        {/*{uploadError && errorMessage.toString()}*/}
                        {updateStatus === Status.SUCCESS && "You have Updated The Movie Successfully"}
                        {updateStatus===Status.LOADING && "loading"}
                    </div>
                    <br/>
                    <h4 className="form-section">
                        <i className="icon-head"/> Add Movie
                    </h4>
                    {/*Name*/}
                    <div className="col-md-9">
                        <SingleInput
                            name={"name"}
                            value={title}
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
                                defaultValue={""}
                            />
                        </div>
                    </div>

                    {/*Genres*/}
                    <div className="row">

                        <div className="col-md-6">
                            <CheckboxGroup checkedValues={genre} genres={genres} onChange={handleCheckboxChange}/>
                        </div>
                        <div className="col-md-6">
                            {/*Types*/}
                            <TypeSelect setFunction={setType}/>
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
                                    onChange={(e) => {
                                        setYear(e.target.value)
                                    }}
                                    type="number"
                                    className="form-control"
                                    placeholder="year"
                                    required
                                    aria-label="Amount (to the nearest dollar)" name="price"/>
                                {/*<span className="input-group-addon">.00</span>*/}
                            </div>
                        </div>
                    </div>

                    {/*Images*/}
                    <div className="form-group">
                        <label>Update Primary image</label>
                        <br/>
                        <ImageInput path={item.path} image={item.image} onChange={(e) => setPrimaryImage(e.target.files[0])}/>



                        <label>update the other images</label> <br/>

                        <div className="row">
                        {
                            images.map(image =>
                                <ImageInput key={image} path={item.path} image={image} onChange={(e) =>handleImageUpdate(e, image)}/>
                            )
                        }

                        </div>
                        {images.length<1&&
                            <label id="image2" className="file center-block">
                                <input onChange={(e) => setSecondImage(e.target.files[0])} type="file" id="image2"/>
                                <span className="file-custom"/>
                            </label>

                        }
                        {
                            images.length<2&&
                            <label id="image3" className="file center-block">
                                <input onChange={(e) => setThirdImage(e.target.files[0])} type="file" id="image3"/>
                                <span className="file-custom"/>
                            </label>
                        }

                    </div>


                </div>
                <div className="form-actions">
                    <div className={className}>
                        {updateStatus === Status.ERROR && "There is some thing Wrong please try again!"}
                        {/*{uploadError && errorMessage.toString()}*/}
                        {updateStatus === Status.SUCCESS && "You have Updated The Movie Successfully"}
                        {updateStatus===Status.LOADING && "loading"}
                    </div>
                    <br/>
                    <button type="reset" className="btn btn-warning mr-1">
                        <i className="icon-cross2"/> Reset
                    </button>

                    <button disabled={updateStatus===Status.LOADING} type="submit" className="btn btn-primary mr-3">
                        <i className="icon-check2"/> Save
                    </button>
                </div>
            </form>

        </div>
    )
};

export default UpdateItemForm

function ImageInput({path, image, onChange}) {
    console.log("img-update==", image)

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



function TypeSelect({  setFunction}) {
    return<div className="form-group">
        <label htmlFor="projectinput5">Type</label>

        <select
            onChange={(e) => { setFunction(e.target.value )}}
            id="projectinput5"

            required={true}
            name="interested"
            className="form-control"
        >
            <option value="none"  selected disabled>
                Choose type
            </option>
            <option  value="movie">Movie</option>
            <option  value="continual">Continual</option>

        </select>

    </div>
        ;
}
