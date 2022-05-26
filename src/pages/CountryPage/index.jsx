import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { CountrySection } from '../../components/CountrySection';
import { ErrorMessage } from '../../components/ErrorMessage';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { useAppContext } from '../../contexts/AppContext';

export const CountryPage = () => {
  const [appState, actions] = useAppContext();
  const params = useParams();
  const { allCountries, searchValue, selectFilter, loading, hasError, errorMessage } = appState;
  const countryItem = appState.allCountries?.filter((c) => c.cca3 == params.countryId);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted && !allCountries.length) {
      actions.getCountries();
    }

    return () => {
      isMounted.current = false;
    };
  }, [actions, allCountries]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <main>
      <div className="container">
        {countryItem.length > 0 ? (
          <CountrySection params={countryItem} />
        ) : (
          <ErrorMessage
            message={'Error'}
            information="the Country you were looking for does not exist"
            hasButton={true}
          />
        )}
      </div>
    </main>
  );
};
