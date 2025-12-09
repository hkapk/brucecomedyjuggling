import React from 'react';


function Videos() {
    return (
        <div className="flex flex-col justify-between bg-black ">
            <div className="p-8">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/l6-M0pzr_0E?si=JmJXSxiSiylD3spb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="p-8">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mcMaRLLwtSI?si=q5pemVVwEkTkld0t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="p-8">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mDUfWppZRwg?si=zcbXmorCP_pLYmPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="p-8">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UcH3qrruPPw?si=960naiiMiFl5-8m_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>

    );
}


export default Videos