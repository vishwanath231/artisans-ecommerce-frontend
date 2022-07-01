import React,{ useEffect } from 'react';
import { Link } from 'react-router-dom';
import './main.css';

const MenuItem = () => {

    useEffect(() => {

        const dropdownHeader = document.querySelectorAll('.dropdown__header');
        const dropdownBody = document.querySelectorAll('.dropdown__body');
    
        for (let i = 0; i < dropdownHeader.length; i++) {
            
            dropdownHeader[i].onclick = function(){
        
                if (this.nextElementSibling.style.maxHeight) {
                    hidePanels()
                }else{
                    showPanel(this)
                }
            }
        }
    
        function showPanel(elem){
            hidePanels();
            elem.classList.add('active');
            elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + 'px';
        }
          
        function hidePanels(){
            for (let i = 0; i <dropdownBody.length; i++) {
              dropdownBody[i].style.maxHeight = null;
              dropdownHeader[i].classList.remove('active');
            }
        }
    
    }, []);


    return (
        <div className='mt-7 md:mt-0'>

            <div className='mb-3 '>
                <Link to='/' className="block py-2 px-4 hover:bg-gray-100">
                    <div className='flex items-end'>
                        <svg viewBox="0 0 512.000000 512.000000" className='w-7 h-7'>
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M2459 4312 c-682 -520 -1495 -1151 -1517 -1179 -44 -57 -79 -131 -92
                            -198 -8 -43 -10 -316 -8 -965 l3 -905 23 -57 c29 -71 94 -145 160 -181 79 -43
                            158 -48 692 -45 448 3 488 4 513 21 16 10 32 29 37 43 6 15 10 240 10 548 0
                            584 0 587 68 673 56 70 127 105 222 111 70 4 79 2 140 -30 45 -23 76 -48 102
                            -83 68 -89 68 -88 68 -671 0 -308 4 -533 10 -548 5 -14 21 -33 37 -43 25 -17
                            64 -18 493 -21 513 -3 593 2 672 45 66 36 131 110 160 181 l23 57 3 910 c2
                            625 -1 926 -8 962 -17 79 -63 162 -122 219 -46 45 -1523 1135 -1577 1163 -30
                            17 -86 13 -112 -7z m801 -742 c393 -287 728 -534 743 -549 16 -14 39 -44 50
                            -66 l22 -40 3 -900 2 -900 -22 -45 c-14 -26 -37 -53 -58 -65 -33 -19 -54 -20
                            -477 -23 l-443 -3 0 473 c0 520 -3 544 -61 660 -37 74 -133 172 -205 210 -238
                            127 -543 36 -667 -200 -65 -123 -67 -142 -67 -670 l0 -473 -462 3 c-444 3
                            -464 4 -498 23 -21 12 -44 39 -58 65 l-22 45 2 900 3 900 23 48 c22 43 87 96
                            739 597 455 349 720 547 727 541 6 -4 333 -243 726 -531z"/>
                            </g>
                        </svg>
                        <p>Home</p>
                    </div>
                </Link>
            </div>

            <div className='mb-3'>
                <Link to='/admin/dashboard' className="block py-2 px-4 hover:bg-gray-100">
                    <div className='flex items-center'>
                    <svg viewBox="0 0 512.000000 512.000000" className='w-7 h-7'>
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M2330 4200 c-892 -87 -1668 -620 -2060 -1415 -93 -187 -136 -302
        -185 -486 -61 -232 -76 -359 -82 -681 l-6 -288 537 0 536 0 0 105 0 105 -427
        2 -428 3 3 155 c7 450 143 881 398 1260 35 52 75 109 89 125 l25 30 212 -212
        c117 -117 218 -213 223 -213 6 0 42 32 80 70 l70 70 -223 223 -223 223 78 75
        c299 285 673 487 1083 583 126 30 298 56 369 56 l51 0 2 -262 3 -263 105 0
        105 0 3 263 2 262 51 0 c71 0 243 -26 369 -56 410 -96 784 -298 1083 -583 l78
        -75 -223 -223 -223 -223 70 -70 c38 -38 74 -70 80 -70 5 0 106 96 223 213
        l212 212 25 -30 c14 -16 54 -73 89 -125 255 -379 391 -810 398 -1260 l3 -155
        -427 -3 -428 -2 0 -105 0 -105 536 0 537 0 -6 288 c-6 322 -21 449 -82 681
        -49 184 -92 299 -185 486 -249 504 -651 906 -1155 1155 -254 126 -479 198
        -750 240 -147 23 -475 34 -615 20z"/>
        <path d="M3060 2316 c-394 -188 -738 -355 -765 -371 -72 -41 -155 -130 -197
        -210 -119 -228 -83 -482 96 -661 115 -115 242 -168 401 -166 191 1 368 97 467
        252 37 58 723 1489 717 1494 -2 2 -326 -150 -719 -338z m53 -571 c-241 -507
        -261 -538 -371 -592 -50 -25 -68 -28 -152 -28 -85 0 -101 3 -153 29 -71 36
        -130 99 -165 174 -22 48 -27 71 -27 142 0 71 5 94 27 142 45 97 94 136 295
        233 432 208 758 362 761 360 2 -1 -95 -209 -215 -460z"/>
        </g>
        </svg>

                        <p>Dashboard</p>
                    </div>
                </Link>
            </div>

            <div className='mb-3'>
                <Link to='/admin/productList' className="block py-2 px-4 hover:bg-gray-100">Products</Link>
            </div>

            <div className='mb-3'>
                <Link to='/admin/orderList' className="block py-2 px-4 hover:bg-gray-100">Orders</Link>
            </div>

            <div className="dropdown__header py-2 px-4 hover:bg-gray-100">User</div>
            <div className="dropdown__body mb-3">
                <div className="px-4">
                    <ul>
                        <li>
                            <Link to='/admin/userList' className="block py-2 px-4 hover:bg-gray-100">User Details</Link>
                        </li>
                    </ul>
                </div>            
            </div>

            <div className="dropdown__header py-2 px-4 hover:bg-gray-100">Makers</div>
            <div className="dropdown__body mb-3 ">
                <div className="px-4">
                    <ul>
                        <li>
                            <Link to='' className="block py-2 px-4 hover:bg-gray-100">Products</Link>
                        </li>
                    </ul>
                </div>            
            </div>


            <div className='mb-3'>
                <Link to='/setting' className="block py-2 px-4 hover:bg-gray-100">Logout</Link>
            </div>
        </div>
    )
}

export default MenuItem;