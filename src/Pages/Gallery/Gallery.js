import React, {useState} from 'react';
import "./gallery.css";
import Img1 from "../Images/t1.jpg";
import Img2 from "../Images/t2.jpg";
import Img3 from "../Images/t3.jpg";
import Img4 from "../Images/t4.jpg";
import Img5 from "../Images/t5.jpg";
import Img6 from "../Images/t6.jpg";
import Img7 from "../Images/t7.jpg";
import Img8 from "../Images/t8.jpg";
import Img9 from "../Images/t9.jpg";
import Img10 from "../Images/t10.jpg";
import Img11 from "../Images/t11.jpg";
import Img12 from "../Images/t12.jpg";
import Img13 from "../Images/t13.jpg";
import Img14 from "../Images/t14.jpg";
import Img15 from "../Images/t15.jpg";
import Img16 from "../Images/t16.jpg";
import Img17 from "../Images/t17.jpg";
import Img18 from "../Images/t18.jpg";
import Img19 from "../Images/t19.jpg";
import Img20 from "../Images/t20.jpg";
import CloseIcon from "@mui/icons-material/Close";

const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 13,
            imgSrc: Img13,
        },
        {
            id: 14,
            imgSrc: Img14,
        },
        {
            id: 15,
            imgSrc: Img15,
        },
        {
            id: 16,
            imgSrc: Img16,
        },
        {
            id: 17,
            imgSrc: Img17,
        },
        {
            id: 18,
            imgSrc: Img18,
        },
        {
            id: 19,
            imgSrc: Img19,
        },
        {
            id: 20,
            imgSrc: Img20,
        },
    ]
const [model, setModel] = useState(false);
const [tempimgSrc, setTempImgSrc] = useState("");

const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
}
    return (
        <>
            <div className={model? "model open" : "model"}>
                <img src={tempimgSrc} />
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className='container-fluid gallery'>
                <div className='container gallery'>
                    <div className='gallery'>
                                {data.map((item, index) => {
                                    return (
                                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                                            <img src={item.imgSrc} style={{width: "100%"}}/>
                                        </div>
                                    )
                                }
                            )}
                    </div>
                </div>
            </div>
            
        
        </>
    )
}

export default Gallery