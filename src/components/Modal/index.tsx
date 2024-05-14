import { Modal, Stack, Icon } from "@fluentui/react";

interface props {
  showModal: boolean;
  onClose: () => void;
}

function CustomModal({ showModal, onClose }: props) {
  return (
    <Modal isOpen={showModal} onDismiss={onClose}>
      <Stack horizontal tokens={{ padding: 20 }}>
        <Stack.Item grow>
          <h3>Modal Head</h3>
        </Stack.Item>
        <Stack.Item>
          <Icon iconName="Cancel" onClick={onClose} />
        </Stack.Item>
      </Stack>
      <Stack tokens={{ padding: "0px 20px" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          lorem nulla, malesuada ut sagittis sit amet, vulputate in leo.
          Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis.
          Fusce tempor sagittis nunc, ut interdum ipsum vestibulum non. Proin
          dolor elit, aliquam eget tincidunt non, vestibulum ut turpis. In hac
          habitasse platea dictumst. In a odio eget enim porttitor maximus.
          Aliquam nulla nibh, ullamcorper aliquam placerat eu, viverra et dui.
          Phasellus ex lectus, maximus in mollis ac, luctus vel eros. Vivamus
          ultrices, turpis sed malesuada gravida, eros ipsum venenatis elit, et
          volutpat eros dui et ante. Quisque ultricies mi nec leo ultricies
          mollis. Vivamus egestas volutpat lacinia. Quisque pharetra eleifend
          efficitur.
        </p>
        <p>
          Mauris at nunc eget lectus lobortis facilisis et eget magna.
          Vestibulum venenatis augue sapien, rhoncus faucibus magna semper eget.
          Proin rutrum libero sagittis sapien aliquet auctor. Suspendisse
          tristique a magna at facilisis. Duis rhoncus feugiat magna in rutrum.
          Suspendisse semper, dolor et vestibulum lacinia, nunc felis malesuada
          ex, nec hendrerit justo ex et massa. Quisque quis mollis nulla. Nam
          commodo est ornare, rhoncus odio eu, pharetra tellus. Nunc sed velit
          mi.
        </p>
        <p>
          Sed condimentum ultricies turpis convallis pharetra. Sed sagittis quam
          pharetra luctus porttitor. Cras vel consequat lectus. Sed nec
          fringilla urna, a aliquet libero. Aenean sed nisl purus. Vivamus
          vulputate felis et odio efficitur suscipit. Ut volutpat dictum lectus,
          ac rutrum massa accumsan at. Sed pharetra auctor finibus. In augue
          libero, commodo vitae nisi non, sagittis convallis ante. Phasellus
          malesuada eleifend mollis. Curabitur ultricies leo ac metus venenatis
          elementum.
        </p>
      </Stack>
    </Modal>
  );
}

export default CustomModal;
