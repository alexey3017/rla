export const Phrase = ({ phrasesList }) => {
  return (
    <>
      {phrasesList.map((phrase, index) => (
        <div className="block" key={index}>
          {phrase}
        </div>
      ))}
    </>
  );
};
