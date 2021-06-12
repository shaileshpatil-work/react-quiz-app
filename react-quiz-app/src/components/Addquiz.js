import { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { IconPicker } from 'react-fa-icon-picker';
import Button from "./Button";

const Addquiz = () => {
    const [value, setValue] = useState("FaAdobe");
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-4 position-fixed bg-light'>
                    <div className='d-flex justify-content-center flex-column full-height'>
                        <h4>Icon</h4>
                        <h3>Name and Description</h3>
                        <p>Cras gravida bibendum dolor eu varius. Morbi fermentum velit nisl, eget vehicula lorem sodaleeget. Donec quis volutpat orci.</p>
                    </div>
                </div>
                <div className='col-sm-8 offset-sm-4'>
                    <div className='p-5'>
                        <form>
                            <div class="form-group mb-3">
                                <label>Title</label>
                                <input type="text" class="form-control"  placeholder="Enter Quiz Name" />
                            </div>
                            <div class="form-group mb-3">
                                <label>Description</label>
                                <CKEditor
                                    editor={ClassicEditor}
                                    data="<p>Description</p>"
                                    onReady={editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        console.log({ event, editor, data });
                                    }}
                                />
                            </div>
                            <div class="form-group mb-3">
                                <label>Featured Image</label>
                                <IconPicker value={value} onChange={(v) => setValue(v)} />
                            </div>
                            <Button name='Save and Continue' color='btn btn-primary' />
                        </form>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addquiz;