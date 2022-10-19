import styled from "styled-components";

export default function Input({ type, placeholder, name, value, updateData, disabled = false }) {
    return (
        <Wrapper
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={updateData}
            disabled={disabled}
            required
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

    &::placeholder {
        color: var(--placeholder-font-gray);
    }

    &:disabled {
        background-color: var(--input-disabled-gray);
    }
`;