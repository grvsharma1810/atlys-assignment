import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

function createRootAndAppendToBody(rootId: string) {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", rootId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

export const Portal = ({
  children,
  wrapperId,
}: {
  children: React.ReactNode;
  wrapperId: string;
}) => {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let root = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!root) {
      root = createRootAndAppendToBody(wrapperId);
      systemCreated = true;
    }

    setPortalRoot(root);

    return () => {
      // delete the programatically created element
      if (systemCreated && root.parentNode) {
        root.parentNode.removeChild(root);
      }
    };
  }, [wrapperId]);

  if (portalRoot === null) return null;

  return createPortal(children, portalRoot);
};
