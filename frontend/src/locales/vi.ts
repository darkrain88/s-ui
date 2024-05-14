export default {
  message: "Chào mừng OHB",
  success: "Thành công",
  failed: "Thất bại",
  enable: "Kích hoạt",
  disable: "Vô hiệu hóa",
  loading: "Đang tải...",
  confirm: "Bạn chắc chắn chứ?",
  yes: "có",
  no: "không",
  unlimited: "vô hạn",
  remained: "Còn lại",
  type: "Loại",
  protocol: "Giao thức",
  submit: "Gửi",
  reset: "Đặt lại",
  now: "Hiện tại",
  network: "Mạng",
  copyToClipboard: "Sao chép vào clipboard",
  noData: "Không có dữ liệu!",
  invalidLogin: "Đăng nhập không hợp lệ!",
  online: "Trực tuyến",
  version: "Phiên bản",
  commaSeparated: "(được phân tách bằng dấu phẩy)",
  error: {
    dplData: "Dữ liệu trùng lặp",
  },
  pages: {
    login: "Đăng nhập",
    home: "Trang chủ",
    inbounds: "Đầu Vào",
    outbounds: "Đầu ra",
    clients: "Khách hàng",
    rules: "Quy tắc",
    basics: "Cơ bản",
    admins: "Quản trị viên",
    settings: "Cài đặt",
  },
  main: {
    tiles: "OHB",
    gauges: "Đồng hồ đo",
    charts: "Biểu đồ",
    infos: "Thông tin",
    gauge: {
      cpu: "Đồng hồ CPU",
      mem: "Đồng hồ RAM",
    },
    chart: {
      cpu: "Máy theo dõi CPU",
      mem: "Máy theo dõi RAM",
      net: "Băng thông mạng",
      pnet: "Gói mạng",
    },
    info: {
      sys: "Thông tin hệ thống",
      sbd: "Thông tin Sing-Box",
      host: "Máy chủ",
      cpu: "CPU",
      core: "Nhân",
      uptime: "Thời gian hoạt động",
      threads: "Luồng",
      memory: "Bộ nhớ",
      running: "Đang chạy"
    }
  },
  objects: {
    inbound: "Đầu Vào",
    client: "Máy Khách hàng",
    outbound: "Đầu Ra",
    rule: "Quy tắc",
    user: "Người dùng",
    tag: "Thẻ",
    listen: "Nghe",
    dial: "Quay số",
    tls: "TLS",
    multiplex: "Ghép đa truyền thông ",
    transport: "Giao thông",
    method: "Phương pháp",
    headers: "Tiêu đề",
    key: "Chìa khóa",
    value: "Giá trị",
  },
  actions: {
    action: "Hành động",
    add: "Thêm",
    edit: "Chỉnh sửa",
    del: "Xóa",
    save: "Lưu",
    update: "Cập nhật",
    submit: "Gửi",
    close: "Đóng",
    restartApp: "Khởi động lại ứng dụng",
  },
  login: {
    title: "Đăng nhập",
    username: "Tên người dùng",
    unRules: "Tên người dùng không thể trống",
    password: "Mật khẩu",
    pwRules: "Mật khẩu không thể trống",
  },
  menu: {
    logout: "Đăng xuất",
  },
  admin: {
    changeCred: "Thay đổi thông tin đăng nhập",
    oldPass: "Mật khẩu hiện tại",
    newUname: "Tên người dùng mới",
    newPass: "Mật khẩu mới",
    lastLogin: "Lân đăng nhập cuôi",
    date: "Ngày",
    time: "Thời gian",
  },
  setting: {
    interface: "Giao diện",
    sub: "Đăng ký",
    addr: "Địa chỉ",
    port: "Cổng",
    webPath: "Đường dẫn gốc",
    domain: "Miền",
    sslKey: "Đường dẫn khóa SSL",
    sslCert: "Đường dẫn chứng chỉ SSL",
    webUri: "URI bảng điều khiển",
    sessionAge: "Tuổi tối đa của phiên",
    trafficAge: "Tuổi lưu thông tối đa",
    timeLoc: "Vị trí múi giờ",
    subEncode: "Kích hoạt mã hóa",
    subInfo: "Kích hoạt thông tin khách hàng",
    path: "Đường dẫn mặc định",
    update: "Thời gian cập nhật tự động",
    subUri: "URI đăng ký",
  },
  client: {
    name: "Tên",
    desc: "Mô tả",
    inboundTags: "Thẻ đầu vào",
    basics: "Cơ bản",
    config: "Cấu hình",
    links: "Liên kết",
    external: "Liên kết bên ngoài",
    sub: "Đăng ký bên ngoài",
  },
  types: {
    un: "Tên người dùng",
    pw: "Mật khẩu",
    direct: {
      overrideAddr: "Ghi đè Địa chỉ",
      overridePort: "Ghi đè Cổng",
      proxyProtocol: "Giao thức Proxy",
    },
    hy: {
      obfs: "Mật khẩu đã được Ẩn",
      auth: "Mật khẩu Xác thực",
      hyOptions: "Tùy chọn Hysteria",
      hy2Options: "Tùy chọn Hysteria2",
      ignoreBw: "Bỏ qua Băng thông của Client",
    },
    shdwTls: {
      hs: "Máy chủ Handshake",
      addHS: "Thêm Máy chủ Handshake",
    },
    ssh: {
      passphrase: "Cụm từ mật khẩu",
      hostKey: "Khóa Máy chủ",
      algorithm: "Thuật toán Khóa",
      clientVer: "Phiên bản Client",
      options: "Tùy chọn SSH",
    },
    tor: {
      execPath: "Đường dẫn File thực thi",
      dataDir: "Thư mục Dữ liệu",
      extArgs: "Đối số Bổ sung",
    },
    tuic: {
      congControl: "Kiểm soát Tắc nghẽn",
      authTimeout: "Thời gian chờ Xác thực",
      hb: "Nhịp tim",
    },
    vless: {
      flow: "Luồng",
      udpEnc: "Mã hóa Gói UDP",
    },
    vmess: {
      security: "Bảo mật",
      globalPadding: "Đệm Toàn cầu",
      authLen: "Chiều dài Mã hóa",
    },
    wg: {
      privKey: "Khóa Riêng tư",
      pubKey: "Khóa Công khai của Đối tác",
      psk: "Khóa được Chia sẻ trước",
      localIp: "IPs Cục bộ",
      worker: "Công nhân",
      ifName: "Tên Giao diện",
      sysIf: "Giao diện Hệ thống",
      gso: "Giao Thức GSO",
      options: "Tùy chọn Wireguard",
      multiPeer: "Nhiều Đối tác",
      allowedIp: "IPs được Phép",
      peer: "Đối tác",
      peers: "Đối tác",
    },
    lb: {
      defaultOut: "Đầu ra Mặc định",
      interruptConn: "Ngắt kết nối hiện tại",
      testUrl: "URL Kiểm tra",
      interval: "Khoảng thời gian",
      tolerance: "Sự dung hòa",
      urlTestOptions: "Tùy chọn Kiểm tra URL",
    }
  },
  in: {
    addr: "Địa chỉ",
    port: "Cổng",
    sniffing: "Đang Sniffing",
    clients: "Kích hoạt khách hàng",
    ssMethod: "Phương thức",
  },
  listen: {
    sniffing: "Đang Sniffing",
    sniffingTimeout: "Thời gian Chờ Sniffing",
    sniffingOverride: "Ghi đè Đích",
    options: "Tùy chọn Nghe",
    tcpOptions: "Tùy chọn TCP",
    udpOptions: "Tùy chọn UDP",
    detour: "Lạc đạo",
    detourText: "Chuyển tiếp tới đầu vào",
    domainStrategy: "Chiến lược Domain",
  },
  dial: {
    bindIf: "Ràng buộc tới Giao diện Mạng",
    bindIp4: "Ràng buộc tới IPv4",
    bindIp6: "Ràng buộc tới IPv6",
    reuseAddr: "Sử dụng lại Địa chỉ Nghe",
    connTimeout: "Thời gian Chờ Kết nối",
    fbTimeout: "Thời gian Chờ Fallback",
    options: "Tùy chọn Gọi",
  },
  transport: {
    enable: "Kích hoạt vận chuyển",
    host: "Máy chủ",
    hosts: "Máy chủ",
    path: "Đường dẫn",
    httpMethod: "Phương thức Yêu cầu",
    idleTimeout: "Thời gian Chờ Chờ đợi",
    pingTimeout: "Thời gian Chờ Ping",
    grpcServiceName: "Tên Dịch vụ",
    grpcPws: "Cho phép mà không Có Luồng",
  },
  mux: {
    enable: "Bật Multiplex",
    maxConn: "Số kết nối Tối đa",
    minStr: "Số Luồng Tối thiểu",
    maxStr: "Số Luồng Tối đa",
    padding: "Chỉ đệm",
    enableBrutal: "Bật Brutal",
  },
  out: {
    addr: "Địa chỉ Máy chủ",
    port: "Cổng Máy chủ",
  },
  rule: {
    add: "Thêm Quy tắc",
    simple: "Đơn giản",
    logical: "Logic",
    mode: "Chế độ",
    invert: "Nghịch đảo",
    ipVer: "Phiên bản IP",
    domain: "Tên miền",
    domainSufix: "Hậu tố Miền",
    domainKw: "Từ khóa Miền",
    domainRgx: "Regex Miền",
    ip: "CIDRs IP",
    privateIp: "Dải IP Không hợp lệ",
    port: "Cổng",
    portRange: "Dải Cổng",
    srcCidr: "CIDRs IP Nguồn",
    srcPrivateIp: "IP Nguồn Không hợp lệ",
    srcPort: "Cổng Nguồn",
    srcPortRange: "Dải Cổng Nguồn",
    ruleset: "Bộ quy tắc",
    rulesetMatchSrc: "Bộ quy tắc IPcidr Phù hợp Nguồn",
    options: "Tùy chọn Quy tắc",
    domainRules: "Tên miền/IP",
    srcIpRules: "IP Nguồn",
    srcPortRules: "Cổng Nguồn",
  },
  ruleset: {
    add: "Thêm Bộ quy tắc",
    format: "Định dạng Dữ liệu",
    interval: "Khoảng cách Cập nhật",
    remote: "Xa",
    local: "Cục bộ",
  },
  basic: {
    log: {
      title: "Nhật ký",
      level: "Mức độ",
      output: "Đầu ra",
      timestamp: "Bật Dấu thời gian",
    },
    dns: {
      final: "Cuối cùng",
      server: "Máy chủ",
      firstServer: "Máy chủ Đầu tiên",
    },
    routing: {
      title: "Định tuyến",
      defaultOut: "Ra ngoài Mặc định",
      defaultIf: "NIC Mặc định",
      defaultRm: "Đánh dấu Định tuyến Mặc định",
      autoBind: "Tự động Ràng buộc NIC",
    },
    exp: {
      storeFakeIp: "Lưu IP Giả mạo",
    },
  },
  tls : {
    enable: "Kích hoạt TLS",
    usePath: "Sử dụng đường dẫn",
    useText: "Sử dụng văn bản",
    certPath: "Đường dẫn tệp chứng chỉ",
    keyPath: "Đường dẫn tệp khóa",
    cert: "Chứng chỉ",
    key: "Khóa",
    options: "Tùy chọn TLS",
    minVer: "Phiên bản Tối thiểu",
    maxVer: "Phiên bản Tối đa",
    cs: "Các bộ mã hóa",
    pubKey: "Khóa Công khai",
    disableSni: "Tắt SNI",
    insecure: "Cho phép Không an toàn",
  },
  stats: {
    upload: "Tải lên",
    download: "Tải xuống",
    volume: "Thể tích",
    usage: "Sử dụng",
    enable: "Kích hoạt thống kê",
    graphTitle: "Biểu đồ lưu lượng",
    B: "B",
    KB: "KB",
    MB: "MB",
    GB: "GB",
    TB: "TB",
    PB: "PB",
    p: "ph",
    Kp: "Kph",
    Mp: "Mph",
    Gb: "Gb",
    bps: "bps",
    Kbps: "Kbps",
    Mbps: "Mbps",
  },
  date: {
    expiry: "Hết hạn",
    expired: "Đã hết hạn",
    d: "ng",
    h: "g",
    m: "p",
    s: "s",
    ms: "ms",
  },
}
