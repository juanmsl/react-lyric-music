import { createContext, useContext, useState } from 'react';

export enum BandFilter {
  All = 'all',
  Country = 'country',
  Rock = 'rock',
  Pop = 'pop',
}

type BandFiltersContextType = {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  category: BandFilter;
  setCategory: (category: BandFilter) => void;
};

const BandFiltersContext = createContext<BandFiltersContextType | null>(null);

type BandFiltersProviderProps = {
  children: React.ReactNode;
};

export const BandFiltersProvider = ({ children }: BandFiltersProviderProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [category, setCategory] = useState<BandFilter>(BandFilter.All);

  return (
    <BandFiltersContext.Provider
      value={{
        searchValue,
        setSearchValue,
        category,
        setCategory,
      }}
    >
      {children}
    </BandFiltersContext.Provider>
  );
};

export const useBandFilters = (): BandFiltersContextType => {
  const context = useContext(BandFiltersContext);

  if (!context) {
    throw new Error('useBandFilters must be used within a BandFiltersProvider');
  }

  return context;
};
