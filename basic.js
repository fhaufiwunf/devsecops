const data = items[0].json;

// test mode (hiện tại bạn đang gửi {"test":"hello"})
if (data.body && data.body.test) {
  return [{
    message: "Webhook working!",
    received: data.body.test
  }];
}

// chuẩn bị cho Trivy sau này
const results = data.Results || [];

let total = 0;

results.forEach(r => {
  if (r.Vulnerabilities) {
    total += r.Vulnerabilities.length;
  }
});

return [{
  total_vulnerabilities: total
}];
