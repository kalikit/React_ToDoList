import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react-dom/client';
import './App.css';
import axios from 'axios';
import { Lists } from './components/Lists';

const getLocalStorage = () => {
    let getList = localStorage.getItem('key_list');
    if (getList){
        return getList = JSON.parse(getList);
    }
    else {
        return [];
    }
}
function App() {
    const [list, setList] = useState(getLocalStorage());
    const [name, setName] = useState("");
    const [editID, setEditID] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            alert("Chưa nhập tên công việc!");
        }
        else if (name && isEditing) {
            setList(
                list.map((item) => {
                    if (item.id === editID) {
                        return { ...item, title: name }
                    }
                    else return item;
                })
            );
            setIsEditing(false);
            setEditID(null);
            setName("");
        }
        else {
            const addItem = {
                id: Math.random(),
                title: name,
            }
            setList([...list, addItem]);
            setName("");
        }
    }
    const editItem = (id) => {
        const newEditItem = list.find((item) => item.id === id)
        setName(newEditItem.title);
        setEditID(id);
        setIsEditing(true);
    }

    const removeItem = (id) => {
        const newDeleteItem = list.filter((item) => item.id !== id);
        setList(newDeleteItem);
        setName("");
    }
    const clearList = () => {
        setList([]);
    }

    useEffect(() => {
        localStorage.setItem('key_list', JSON.stringify(list));
    }, [list]);

    return (
        <div className='main'>
            <div className='title'>
                <h1> To Do List</h1>
            </div>
            <div className='input'>
                <form onSubmit={handleSubmit}>
                    <div class="container">
                        <div class="row">
                            <div class="col-10">
                                <input value={name} onChange={(e) => setName(e.target.value)} class="form-control" type="text" placeholder="Nhập tên công việc cần làm!" aria-label=".form-control-lg example"></input>
                            </div>
                            <div class="col-2">
                                <button type="submit" class="btn btn-primary">
                                    {isEditing ? 'Sửa' : 'Thêm'}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='show_list'>
                {list.length > 0 && (
                    <>
                        <Lists nameItems={list} editItem={editItem} removeItem={removeItem} />
                        <div className='btn_clear'>
                            <button type='button' className='btn btn-light' onClick={() => {
                                if (window.confirm("Bạn có muốn xóa hết danh sách không!")) {
                                    clearList()
                                }
                            }}>Xóa hết danh sách</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default App;
