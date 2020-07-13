import React from "react";
import { Tag, Input, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { NewRivalryContext } from "../../contexts/NewRivalryContext";

class NewTags extends React.Component {
  static contextType = NewRivalryContext;
  state = {
    inputVisible: false,
    inputValue: "",
    editInputIndex: -1,
    editInputValue: "",
  };

  componentDidMount() {
    console.log(this.context);
  }

  handleClose = (removedTag) => {
    const tags = this.context.tags.filter((tag) => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.context;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      inputVisible: false,
      inputValue: "",
    });
    this.context.setTags(tags);
  };

  handleEditInputChange = (e) => {
    this.setState({ editInputValue: e.target.value });
  };

  handleEditInputConfirm = () => {
    this.setState(({ editInputIndex, editInputValue }) => {
      const newTags = [...this.context.tags];
      newTags[editInputIndex] = editInputValue;

      this.context.setTags(newTags);
      return {
        editInputIndex: -1,
        editInputValue: "",
      };
    });
  };

  saveInputRef = (input) => {
    this.input = input;
  };

  saveEditInputRef = (input) => {
    this.editInput = input;
  };

  render() {
    const {
      inputVisible,
      inputValue,
      editInputIndex,
      editInputValue,
    } = this.state;
    const { tags } = this.context;
    return (
      <>
        {tags.map((tag, index) => {
          if (editInputIndex === index) {
            return (
              <Input
                ref={this.saveEditInputRef}
                key={tag}
                size="small"
                className="tag-input"
                value={editInputValue}
                onChange={this.handleEditInputChange}
                onBlur={this.handleEditInputConfirm}
                onPressEnter={this.handleEditInputConfirm}
              />
            );
          }

          const isLongTag = tag.length > 20;

          const tagElem = (
            <Tag
              className="edit-tag rivalry-tag mb-5"
              key={tag}
              closable={index !== 0}
              onClose={() => this.handleClose(tag)}
            >
              <span
                onDoubleClick={(e) => {
                  if (index !== 0) {
                    this.setState(
                      { editInputIndex: index, editInputValue: tag },
                      () => {
                        this.editInput.focus();
                      }
                    );
                    e.preventDefault();
                  }
                }}
              >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </span>
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            className="tag-input"
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag
            className="site-tag-plus rivalry-tag mb-5"
            onClick={this.showInput}
          >
            <PlusOutlined className={"plus-tag"} /> New Tag
          </Tag>
        )}
      </>
    );
  }
}

export default NewTags;
