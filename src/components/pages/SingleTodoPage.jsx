// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useFetch } from "../../hooks/useFetch";
// import SectionStyled from "../common/SectionStyled";
// import { LinkStyled } from "../common/Link.styled";
// import ContainerStyled from "../common/ContainerStyled";
// import LoaderThreeCircles from "../loaders/loaderThreeCircles/LoaderThreeCircles";
// import ErrorMessage from "../Error/ErrorMessage";
// import Btn from "../common/Btn";

import SingleTodo from "../singleTodo/SingleTodo";

// const SingleTodoPage = () => {
//   const params = useParams();
//   const { data: todo, isLoading, error, fetchData } = useFetch();
  
//   useEffect(() => {
//     if (!todo && !isLoading && !error) {
//       fetchData(`todos/${params.id}`);
//     }
//   }, [error, fetchData, isLoading, params.id, todo]);

//   const editCurrentTask = () => {

//   }

//   if (error) {
//     return <ErrorMessage $textAlignCenter error={error} />
//   }

//   return (
//     isLoading ? <LoaderThreeCircles isLoading = {isLoading} /> : (todo && (
//       <SectionStyled>
//         <ContainerStyled>
//         <h2>{todo.title}</h2>
//         <p>{todo.description}</p>
//         <LinkStyled to="/todos">Go to todo list</LinkStyled>
//         <Btn type="button" onClick={editCurrentTask}>
//         Edit task
//       </Btn>
//         </ContainerStyled>
//       </SectionStyled>
//     ))
//   );
// };

// export default SingleTodoPage;


const SingleTodoPage = () => {
  return (
    <SingleTodo />
  )
};

export default SingleTodoPage;




// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useFetch } from "../../hooks/useFetch";
// import SectionStyled from "../common/SectionStyled";
// import { LinkStyled } from "../common/Link.styled";
// import ContainerStyled from "../common/ContainerStyled";
// import LoaderThreeCircles from "../loaders/loaderThreeCircles/LoaderThreeCircles";
// import ErrorMessage from "../Error/ErrorMessage";
// import Btn from "../common/Btn";

// const SingleTodoPage = () => {
//   const params = useParams();
//   const { data: todo, isLoading, error, fetchData } = useFetch();
//   const [isTitleEditing, setIsTitleEditing] = useState(false);
//   const [isDescriptionEditing, setIsDescriptionEditing] = useState(false);
//   const [editedTitle, setEditedTitle] = useState("");
//   const [editedDescription, setEditedDescription] = useState("");

//   useEffect(() => {
//     if (!todo && !isLoading && !error) {
//       fetchData(`todos/${params.id}`);
//     }
//   }, [error, fetchData, isLoading, params.id, todo]);

//   const handleTitleEditClick = () => {
//     setIsTitleEditing(true);
//     setEditedTitle(todo.title);
//   };

//   const handleDescriptionEditClick = () => {
//     setIsDescriptionEditing(true);
//     setEditedDescription(todo.description);
//   };

//   const handleTitleSaveClick = () => {
//     // Збереження зміненого title
//     setIsTitleEditing(false);
//   };

//   const handleDescriptionSaveClick = () => {
//     // Збереження зміненого description
//     setIsDescriptionEditing(false);
//   };

//   if (error) {
//     return <ErrorMessage $textAlignCenter error={error} />;
//   }

//   return (
//     isLoading ? <LoaderThreeCircles isLoading={isLoading} /> : (todo && (
//       <SectionStyled>
//         <ContainerStyled>
//           {isTitleEditing ? (
//             <div>
//               <input
//                 type="text"
//                 value={editedTitle}
//                 onChange={(e) => setEditedTitle(e.target.value)}
//               />
//               <Btn onClick={handleTitleSaveClick}>Save</Btn>
//             </div>
//           ) : (
//             <div>
//               <h2 onClick={handleTitleEditClick}>{todo.title}</h2>
//             </div>
//           )}
//           {isDescriptionEditing ? (
//             <div>
//               <textarea
//                 value={editedDescription}
//                 onChange={(e) => setEditedDescription(e.target.value)}
//               />
//               <Btn onClick={handleDescriptionSaveClick}>Save</Btn>
//             </div>
//           ) : (
//             <div>
//               <p onClick={handleDescriptionEditClick}>{todo.description}</p>
//             </div>
//           )}
//           <LinkStyled to="/todos">Go to todo list</LinkStyled>
//         </ContainerStyled>
//       </SectionStyled>
//     ))
//   );
// };

// export default SingleTodoPage;