import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

/**
 * Element의 가시성을 확인하는 Hook
 * @param initialVisibility 초기 가시 여부를 설정합니다.
 * @param threshold 가시로 판단할 노출 비율을 설정합니다.
 */
const useVisibility = (initialVisibility = false, threshold = 1.0) => {
  const ref = useRef(null);

  const [isVisible, setVisible] = useState(!!initialVisibility);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setVisible(!!ref.current && entry.isIntersecting);
    });
  }, []);

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px',
      threshold,
    };
  }, [threshold]);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [callback, options]);

  return { ref, isVisible };
};

export default useVisibility;
