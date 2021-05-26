import React, { Component } from 'react';
import { timeDifference } from '../helpers/utility';
import Button from './uielements/button';
import { InputSearch } from './uielements/input';
import { SubMenuWrapper } from './subMenuComponent.style';
import Scrollbars from './utility/customScrollBar';

function filterNotes(notes, search) {
  search = search.toUpperCase();
  if (search) {
    return notes.filter(note => note.note.toUpperCase().includes(search));
  }
  return notes;
}
export default class extends Component {
  constructor(props) {
    super(props);
    this.singleNote = this.singleNote.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      search: '',
    };
  }

  onChange(event) {
    this.setState({ search: event.target.value });
  }

  singleNote(note) {
    const { selectedId, deleteNote, changeNote, colors } = this.props;
    const activeClass = selectedId === note.id ? 'active' : '';
    const onChange = () => changeNote(note.id);
    const onDelete = () => deleteNote(note.id);
    return (
      <div className={`isoList ${activeClass}`} key={note.id}>
        {/* <div className="isoNoteBGColor" style={{ width: '0px', background: 'blue' }} /> */}
        <div className="isoSubMenuText" onClick={onChange}>
          <span>{note.note}</span>
          {/* <span className="isoNoteCreatedDate">{timeDifference(note.createTime)}</span> */}
        </div>
        {/* <Button className="isoDeleteBtn" icon="close" type="button" onClick={onDelete} /> */}
      </div>
    );
  }

  render() {
    const { search } = this.state;
    const notes = filterNotes(this.props.notes, search);
    return (
      <SubMenuWrapper className="isoSubMenuWrapper">
        {/* <InputSearch placeholder="Search Notes" className="isoSearchNotes" value={search} onChange={this.onChange} /> */}
        <div className="isoSubMenu">
          <Scrollbars>
            {notes && notes.length > 0 ? (
              notes.map(note => this.singleNote(note))
            ) : (
              <span className="isoNotlistNotice">No note found</span>
            )}
          </Scrollbars>
        </div>
      </SubMenuWrapper>
    );
  }
}
