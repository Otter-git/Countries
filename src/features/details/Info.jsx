import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useBorders } from './use-borders';

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;

export const Info = (props) => {
  const {
    name,
    flags,
    capital,
    population,
    region,
    subregion,
    currencies,
    languages,
    borders,
    maps,
    status,
    tld,
    push
  } = props;

  const neighbors = useBorders(borders);

  console.log(props);

  return (
    <Wrapper>
      <InfoImage src={flags.svg} alt={flags.alt} />
      <div>
        <InfoTitle>{name.official}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name:</b> {name.common}
            </ListItem>
            <ListItem>
              <b>Population:</b> {population}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Sub Region:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Currency:</b>{' '}
              {<span key={Object.values(currencies)[0].name}>
                {Object.values(currencies)[0].name} ({Object.values(currencies)[0].symbol})
              </span>}
            </ListItem>
            <ListItem>
              <b>Languages:</b>{' '}
              {(Object.values(languages)).map((l) => (
                <span key={l}>{l} </span>
              ))}
            </ListItem>
            <ListItem>
              <b>Map:</b>{' '}
              <Link to={maps.googleMaps}>{name.common}</Link>
            </ListItem>
            <ListItem>
              <b>Status:</b> {status}
            </ListItem>
            <ListItem>
              <b>Top Level Domain:</b>{' '}
              {tld.map((t) => (
                <span key={t}>{t} </span>
              ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries</b>
          {!borders ? (
            <span>There is no border countries</span>
          ) : (
            <TagGroup>
              {neighbors.map((countryName) => (
                < Tag key={countryName} onClick={() => push(`/country/${countryName}`)}>
                  {countryName}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper >
  );
};
