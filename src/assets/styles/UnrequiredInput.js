import styled from "styled-components";

export default function UnrequiredInput({ type, placeholder, name, value, updateData }) {
    return (
        <Wrapper
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={updateData}
        />
    );
}

const Wrapper = styled.input`
    background-color: var(--main-white);
    border-radius: 6px;
    color: var(--font-black);
    font-family: var(--titles-font);
    font-size: 27px;
    padding: 12px 17px;
    width: 100%;
    height: 100px;

    &::placeholder {
        color: var(--placeholder-font-gray);
    }
`;