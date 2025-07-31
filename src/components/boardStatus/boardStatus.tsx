import { useState } from "react";
import { getBoardSelector } from "appRedux/selectors";
import { useAppSelector } from "components/hooks/typedHooks";

import { FiCopy, FiCheck } from "react-icons/fi";
import {
  BoardStatusParagraph,
  BoardIdContainer,
  CopyButton,
  BoardStatusMainDiv,
} from "./BoardStatus.styled";

export default function BoardStatus() {
  const board = useAppSelector(getBoardSelector);
  const [copied, setCopied] = useState(false);

  const handleCopyBoardId = async () => {
    if (board?.hashedID) {
      try {
        await navigator.clipboard.writeText(board.hashedID);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      } catch (err) {
        console.error("Failed to copy board ID:", err);
      }
    }
  };

  return (
    <BoardStatusMainDiv>
      <h2>Board Status:</h2>
      <BoardStatusParagraph>
        Board Title: <span style={{ fontSize: "18px" }}>{board?.title}</span>
      </BoardStatusParagraph>
      <BoardStatusParagraph>
        Board ID:{" "}
        {board && (
          <>
            <BoardIdContainer>{board.hashedID}</BoardIdContainer>
            <CopyButton
              $copied={copied}
              onClick={handleCopyBoardId}
              title="Copy Board ID to clipboard"
            >
              {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
              {copied ? "Copied!" : "Copy"}
            </CopyButton>
          </>
        )}
      </BoardStatusParagraph>
    </BoardStatusMainDiv>
  );
}
