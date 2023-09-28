import React, { useEffect, useState } from "react";
import { H5, Paragraph } from "../../../../Components/Text";
import ListContainer from "../../../../Components/List/ListContainer";
import ListItem from "../../../../Components/List/ListItem";

const MessageList = (props) => {
    const { messages } = props;
    const [lastedMessage, setLastedMessage] = useState([]);

    const formatingDate = (date) => {
        const newDate = new Date(date);
        const day = newDate.getDay();
        const month = newDate.getMonth();
        const year = newDate.getFullYear();
        const time = `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;

        return `${day}/${month}/${year} - ${time}`;
    };

    useEffect(() => {
        const newMessageFormat = messages.map((message) => {
            return {
                name: message?.name,
                email: message?.email,
                message: message?.message,
                created_at: formatingDate(message?.created_at),
            };
        });
        setLastedMessage(newMessageFormat);
    }, []);

    return (
        <section className="p-6 bg-white shadow rounded-3xl">
            <div className="mb-6">
                <H5>Lasted Message</H5>
                <Paragraph>
                    Recent messages sent via email form on the contact page
                </Paragraph>
            </div>
            <ListContainer>
                {lastedMessage?.map((message, i) => {
                    return (
                        <ListItem key={i}>
                            <div>
                                <a
                                    href={`mailto:${message?.email}`}
                                    target="_blank"
                                    className="block space-x-2"
                                >
                                    <span className=" capitalize">
                                        {message?.name}
                                    </span>
                                    <span>-</span>
                                    <span>{message?.email}</span>
                                </a>
                                <span className="block text-sm text-iapm-dark-gray">
                                    {message?.created_at}
                                </span>
                                <div className="mt-4 ">
                                    <Paragraph>{message?.message}</Paragraph>
                                </div>
                            </div>
                        </ListItem>
                    );
                })}
                {Object.keys(lastedMessage).length === 0 && (
                    <ListItem isEmpty={true}>
                        <span>No data displayed</span>
                    </ListItem>
                )}
            </ListContainer>
        </section>
    );
};

export default MessageList;
