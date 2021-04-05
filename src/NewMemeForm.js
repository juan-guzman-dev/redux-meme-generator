import React, { useState } from "react";
import uuidv4 from "uuid/v4";
import "./NewMemeForm";

const DEFAULT_FORM = {
  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQv7LRl7QTU8UJP1TegabvLqZlnTvmge8fA&usqp=CAU",
  topText: "Dave",
  bottomText: "Grohl"
};

function NewMemeForm({ addMeme }) {
  const [form, setForm] = useState(DEFAULT_FORM);

  function handleSubmit(e) {
    e.preventDefault();
    addMeme({ ...form, id: uuidv4() });
    setForm(DEFAULT_FORM);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  return (
    <div>
      <h2>Make a New Meme</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Image URL</label>
        <input
          type="text"
          name="url"
          id="form_url"
          onChange={handleChange}
          value={form.url}
        />
        <label htmlFor="topText">Top Text</label>
        <input
          type="text"
          name="topText"
          id="form_topText"
          onChange={handleChange}
          value={form.topText}
        />
        <label htmlFor="bottomText">Bottom Text</label>
        <input
          type="text"
          name="bottomText"
          id="form_bottomText"
          onChange={handleChange}
          value={form.bottomText}
        />
        <button type="submit" id="form_submit">
          Generate Meme!
        </button>
      </form>
    </div>
  );
}

export default NewMemeForm;
