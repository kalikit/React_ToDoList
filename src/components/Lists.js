import React, { useState, useEffect } from "react";
import { data } from "../data";
import '../css/Lists.css';

const Lists = ({ nameItems, editItem, removeItem }) => {
    return (
        nameItems.map((item) => {
            return (
                <div class="container" key={item.id}>
                    <div className="row">
                        <div className="col-8">
                            <h2 className="name_item">{item.title}</h2>
                        </div>
                        <div className="col-4 text-center">
                            <button type="button" class="btn btn-primary btn_edit" onClick={() => editItem(item.id)}>Edit</button>
                            <button type="button" class="btn btn-danger btn_delete" onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export { Lists };