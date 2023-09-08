import { LoadMoreBtn } from './Button.styled'
import {Wrapper} from './Button.styled'

export const ButtonLoadMore = ({ onloadMore }) => {
  return (
    <Wrapper>
      <LoadMoreBtn type="button" onClick={onloadMore}>
        Load more
      </LoadMoreBtn>
    </Wrapper>
  );
};

