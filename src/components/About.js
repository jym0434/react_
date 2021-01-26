import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = (props) => {
    let cnt = 10;
    // let {cnt, setCnt} = useState(10);

    return (
        <div>
            <div className="about">About / Props Test : { props.data }</div>
            <ul className="pagenation">
                {
                    cnt !== 0 ?
                    [...Array(cnt)].map((i, index) => {
                        return (
                            <li><Link to={`./movie/${ index + 1 }`}>{ index + 1 }</Link></li>
                        )
                    }) : <li>갯수가 없음</li>
                }
            </ul>
        </div>
    )
}

About.defaultProps = {
    data: 'no_param'
}

export default About;