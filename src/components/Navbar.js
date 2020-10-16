import React from 'react';

function Navingbar(props) {
    return (
        <div>
            <nav class="navbar custom-navbar sticky-top navbar-light bg-light py-1" >
                <img class="image" src="https://www.flunkey.app/logo192.png" alt="" />
                <div class="row">
                    <div class="col-sm-12 text-center">
                        <a href="https://www.flunkey.app/#about"id="btnSearch" class="btn btn-primary btn-md center-block" Style="width: 100px;" Style="margin-right: 1.5rem;" >About Us</a>
                        <a href="https://www.flunkey.app/#contact"id="btnClear" class="btn btn-danger btn-md center-block" Style="width: 120px;" >Contact Us</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navingbar;